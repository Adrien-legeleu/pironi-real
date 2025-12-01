"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Loader2, Send, Phone, Mail, MapPin, Clock } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Image from "next/image"
import { BackgroundRippleEffect } from "./ui/background-ripple-effect"

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Adresse email invalide." }),
  budget: z.string().optional(),
  serviceType: z.string().min(1, { message: "Veuillez sélectionner un type de service." }),
  message: z.string().min(10, { message: "Merci de détailler votre demande (min 10 caractères)." }),
})




export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
const contactAvatars = [
  "https://randomuser.me/api/portraits/men/10.jpg",
  "https://randomuser.me/api/portraits/women/9.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
]

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      budget: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    console.log(values)
    toast.success("Demande envoyée", {
      description: "Nous revenons vers vous rapidement avec une réponse personnalisée.",
    })
    
    form.reset()
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
       <BackgroundRippleEffect />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-pironi-anthracite mb-6">Contactez l'équipe Pironi</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une réponse rapide, un devis personnalisé et un accompagnement humain pour tous vos projets de mobilité.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact Info & Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-pironi-anthracite/10 mb-8">
              {/* Placeholder for local image if available, using a gradient for now as fallback/base */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/40" />
              <div className="absolute inset-0 flex items-center justify-center text-white/20">
                 {/* If a real image exists, use <Image src="/images/contact-pironi.jpg" fill className="object-cover" /> */}
                 <span className="text-9xl  font-bold ">Pironi</span>
              </div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent text-white">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex -space-x-3">
                  {contactAvatars.map((src, index) => (
  <div
    key={index}
    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200"
  >
    <img
      src={src}
      alt="Client Pironi"
      width={40}
      height={40}
      className="w-full h-full object-cover"
    />
  </div>
))}

                  </div>
                  <div className="font-semibold">
                    20+ trajets organisés chaque semaine
                  </div>
                </div>
                <p className="text-white/80 text-sm">Rejoignez nos clients satisfaits.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
               <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold text-2xl text-pironi-anthracite mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-pironi-red" />
                    Zone desservie
                  </h4>
                  <p className="text-sm text-gray-600">
                    Saint-Cloud, Île-de-France et alentours.
                  </p>
               </div>
               <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold text-2xl text-pironi-anthracite mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-pironi-red" />
                    Informations
                  </h4>
                  <p className="text-sm text-gray-600">
                    Lundi - Samedi : 9h - 19h<br/>
                    Dimanche : Sur RDV <br />
                    tel: 06 59 31 69 91
                  </p>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-10   shadow-[8px_8px_54px_rgba(0,0,0,0.08),_-8px_-8px_54px_rgba(255,255,255,0.7)] border border-primary/10"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-pironi-anthracite">Nom</label>
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      className="bg-gray-50 border-gray-100 rounded-xl h-12 focus-visible:ring-pironi-red focus-visible:bg-white transition-all"
                      {...form.register("name")}
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-pironi-anthracite">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="bg-gray-50 border-gray-100 rounded-xl h-12 focus-visible:ring-pironi-red focus-visible:bg-white transition-all"
                      {...form.register("email")}
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-pironi-anthracite">Budget estimé</label>
                    <Input
                      id="budget"
                      placeholder="Ex : 500 €, 1500 €..."
                      className="bg-gray-50 border-gray-100 rounded-xl h-12 focus-visible:ring-pironi-red focus-visible:bg-white transition-all"
                      {...form.register("budget")}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="serviceType" className="text-sm font-medium text-pironi-anthracite">Service souhaité</label>
                    <Select 
                      onValueChange={(value) => form.setValue("serviceType", value)}
                      defaultValue={form.getValues("serviceType")}
                    >
                      <SelectTrigger className="bg-gray-50 border-gray-100 rounded-xl h-12 focus:ring-pironi-red focus:bg-white transition-all">
                        <SelectValue placeholder="Sélectionnez..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sans-permis">Location sans permis</SelectItem>
                        <SelectItem value="transport">Transport de marchandises</SelectItem>
                        <SelectItem value="chauffeur">Chauffeur privé</SelectItem>
                        <SelectItem value="autre">Autre projet de mobilité</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.serviceType && (
                      <p className="text-sm text-red-500">{form.formState.errors.serviceType.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-pironi-anthracite">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Expliquez votre besoin : type de service, dates, ville..."
                    className="bg-gray-50 border-gray-100 rounded-xl min-h-[150px] focus-visible:ring-pironi-red focus-visible:bg-white transition-all resize-none p-4"
                    {...form.register("message")}
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                  )}
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary text-white hover:bg-primary/90 rounded-2xl py-6 text-lg font-semibold transition-all hover:scale-[1.01] shadow-lg shadow-primary/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
              
              <p className="text-xs text-center text-gray-400 mt-4">
                En envoyant ce formulaire, vous acceptez d'être recontacté par nos équipes.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
