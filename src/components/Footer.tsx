import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 - Logo & Description */}
          <div className="space-y-4">
            <img src={logoHorizontal} alt="Med Imagem" className="h-10 brightness-0 invert" />
            <p className="text-sm opacity-80 leading-relaxed">
              Med Imagem. 28 anos cuidando de histórias. Prontos para o futuro.
            </p>
          </div>

          {/* Col 2 - Exames */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Exames</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/ultrassonografia" className="hover:opacity-100 transition-opacity">Ultrassonografia</Link></li>
              <li><Link to="/ressonancia-magnetica" className="hover:opacity-100 transition-opacity">Ressonância Magnética</Link></li>
              <li><Link to="/raio-x" className="hover:opacity-100 transition-opacity">Raio-X</Link></li>
              <li><Link to="/tomografia" className="hover:opacity-100 transition-opacity">Tomografia</Link></li>
              <li><Link to="/mamografia" className="hover:opacity-100 transition-opacity">Mamografia</Link></li>
            </ul>
          </div>

          {/* Col 3 - Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Links úteis</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/preparo" className="hover:opacity-100 transition-opacity">Preparo de exames</Link></li>
              <li><Link to="/convenios" className="hover:opacity-100 transition-opacity">Convênios</Link></li>
              <li><a href="https://web.clinux.com.br/portal/medimagemsm/resultados" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Resultados</a></li>
              <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
              <li><Link to="/contato" className="hover:opacity-100 transition-opacity">Contato</Link></li>
            </ul>
          </div>

          {/* Col 4 - Contato */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>(27) 3763-3366</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>(27) 99868-4980</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rua Ermelino Carneiro Sobrinho, 221 – Bairro Fátima, São Mateus/ES</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contato@medimagemsm.com.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 text-center text-sm opacity-60 space-y-2">
          <div className="flex items-center justify-center gap-3">
            <Link to="/politica-de-privacidade" className="hover:opacity-100 transition-opacity">Política de Privacidade</Link>
            <span>|</span>
            <Link to="/termos-de-uso" className="hover:opacity-100 transition-opacity">Termos de Uso</Link>
            <span>|</span>
            <Link to="/politica-de-cookies" className="hover:opacity-100 transition-opacity">Política de Cookies</Link>
          </div>
          <p className="text-xs text-primary-foreground/50 mt-1">Responsável Técnica: Dra Cecilia Maria de Oliveira Gonçalves – CRM 6381</p>
          <p>© {new Date().getFullYear()} Med Imagem São Mateus. Todos os direitos reservados.</p>
          <p className="text-xs text-primary-foreground/40">
            Desenvolvido por{" "}
            <a
              href="https://agenciaazulmarinho.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity underline"
            >
              Agência Azul Marinho
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
