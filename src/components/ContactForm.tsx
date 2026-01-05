import { useState } from "react"
import { useForm } from "react-hook-form"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Send, CheckCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const EMAILJS_CONFIG = {
  PUBLIC_KEY: "uv7rGhuC8QRs8Uo79",
  SERVICE_ID: "service_7v8oewe",
  TEMPLATE_ID: "template_1oaueul",
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      )

      console.log("Email sent successfully:", response)

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      setIsSubmitted(true)
      reset()

      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error("Error sending email:", error)

      toast({
        title: "Error sending message",
        description:
          "Please try again or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="animate-[scaleIn_0.5s_ease-out]">
        <Card className="card-elevated p-8 text-center">
          <div className="animate-[scaleIn_0.5s_ease-out_0.2s_both]">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gradient">
            Message Sent!
          </h3>
          <p className="text-muted-foreground">
            Thank you for contacting me. I'll reply as soon as possible.
          </p>
        </Card>
      </div>
    )
  }

  return (
    <div className="animate-[fadeInUp_0.8s_ease-out]">
      <Card className="card-elevated p-8">
        <h3 className="text-2xl font-bold mb-6 text-gradient">Let's Talk</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your full name"
                {...register("name", { required: "Name is required" })}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="What is this about?"
              {...register("subject", { required: "Subject is required" })}
              className={errors.subject ? "border-destructive" : ""}
            />
            {errors.subject && (
              <p className="text-sm text-destructive">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project, inquiry, or just say hello..."
              className={`min-h-[120px] resize-none ${
                errors.message ? "border-destructive" : ""
              }`}
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-sm text-destructive">
                {errors.message.message}
              </p>
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
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </Card>
    </div>
  )
}