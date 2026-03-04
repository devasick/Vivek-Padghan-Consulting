import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">{t("contact.title")}</h1>
          <p className="text-muted-foreground text-lg">{t("contact.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Contact Info */}
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <h3 className="font-display font-bold text-2xl mb-8">Vivek Padghan Consulting</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Adresse</p>
                    <p className="text-muted-foreground mt-1">Knoopstraße 40<br/>21074 Hamburg</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Telefon</p>
                    <p className="text-muted-foreground mt-1">+49 (0) 174 282 30 31</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">E-Mail</p>
                    <p className="text-muted-foreground mt-1">info@vivek-padghan.de</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Bürozeiten</p>
                    <p className="text-muted-foreground mt-1">Mo - Do: 08:00 - 17:00 Uhr<br/>Fr: 08:00 - 14:00 Uhr</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="h-full min-h-[400px] bg-muted rounded-3xl overflow-hidden relative border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.3841896726446!2d9.9835!3d53.4573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f3b3c3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sKnoopstra%C3%9Fe%2040%2C%2021074%20Hamburg!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Vivek Padghan Consulting Standort"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
