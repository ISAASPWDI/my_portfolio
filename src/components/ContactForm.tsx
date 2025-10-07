import { motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Send, CheckCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// CONFIGURACIÓN DE EMAILJS
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'uv7rGhuC8QRs8Uo79',
  SERVICE_ID: 'service_7v8oewe',
  TEMPLATE_ID: 'template_1oaueul'
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Inicializar EmailJS con tu Public Key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
      
      // ✅ CORREGIDO: Variables que coinciden con tu template
      const templateParams = {
        name: data.name,        // Coincide con {{name}} en el template
        email: data.email,      // Coincide con {{email}} en el template
        subject: data.subject,  // Coincide con {{subject}} en el template
        message: data.message   // Coincide con {{message}} en el template
      }
      
      // Enviar el email
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      )
      
      console.log('Email enviado exitosamente:', response)
      
      toast({
        title: "¡Mensaje enviado exitosamente!",
        description: "Gracias por contactarme. Te responderé pronto.",
      })
      
      setIsSubmitted(true)
      reset()
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
      
    } catch (error) {
      console.error('Error al enviar el email:', error)
      
      toast({
        title: "Error al enviar el mensaje",
        description: "Por favor, intenta nuevamente o contáctame directamente por email.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="card-elevated p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-2 text-gradient">¡Mensaje Enviado!</h3>
          <p className="text-muted-foreground">
            Gracias por contactarme. Te responderé lo antes posible.
          </p>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="card-elevated p-8">
        <h3 className="text-2xl font-bold mb-6 text-gradient">Hablemos</h3>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                placeholder="Tu nombre completo"
                {...register("name", { required: "El nombre es obligatorio" })}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu.email@ejemplo.com"
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Correo electrónico inválido"
                  }
                })}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Asunto</Label>
            <Input
              id="subject"
              placeholder="¿De qué se trata?"
              {...register("subject", { required: "El asunto es obligatorio" })}
              className={errors.subject ? "border-destructive" : ""}
            />
            {errors.subject && (
              <p className="text-sm text-destructive">{errors.subject.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              placeholder="Cuéntame sobre tu proyecto, consulta o simplemente salúdame..."
              className={`min-h-[120px] resize-none ${errors.message ? "border-destructive" : ""}`}
              {...register("message", { required: "El mensaje es obligatorio" })}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full group transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Enviando...
              </>
            ) : (
              <>
                Enviar Mensaje
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </Card>
    </motion.div>
  )
}