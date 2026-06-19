import os
from fpdf import FPDF

class LegalPDF(FPDF):
    def header(self):
        # Top banner styling
        self.set_fill_color(26, 26, 46) # Primary Dark #1a1a2e
        self.rect(0, 0, 210, 15, "F")
        self.set_fill_color(201, 162, 39) # Accent Gold #c9a227
        self.rect(0, 15, 210, 2, "F")
        self.ln(10)

    def footer(self):
        # Position at 1.5 cm from bottom
        self.set_y(-15)
        # Font settings for footer
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(107, 114, 128) # Gray #6b7280
        # Page number
        self.cell(0, 10, f"Página {self.page_no()}/{{nb}} - NowNexus Group, S.L.", align="C")

    def create_title(self, title_text):
        self.set_font("Helvetica", "B", 18)
        self.set_text_color(26, 26, 46) # Primary Dark
        self.cell(0, 10, title_text, align="L")
        self.ln(10)
        # Underline-like gold accent bar
        self.set_fill_color(201, 162, 39)
        self.cell(40, 1.5, "", fill=True)
        self.ln(6)

    def create_section_title(self, num, title):
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(26, 26, 46)
        self.multi_cell(0, 6, f"{num}. {title.upper()}")
        self.ln(2)

    def add_paragraph(self, text):
        self.set_font("Helvetica", "", 9.5)
        self.set_text_color(55, 65, 81) # Dark Gray #374151
        self.multi_cell(0, 5, text)
        self.ln(3)

    def add_bullet_point(self, title, text):
        self.set_font("Helvetica", "B", 9.5)
        self.set_text_color(55, 65, 81)
        self.write(5, f"  -  {title}: ")
        self.set_font("Helvetica", "", 9.5)
        self.write(5, f"{text}\n")
        self.ln(2)

def generate_aviso_legal(output_path):
    pdf = LegalPDF()
    pdf.alias_nb_pages()
    pdf.set_margins(20, 20, 20)
    pdf.add_page()
    
    # Title
    pdf.create_title("AVISO LEGAL Y CONDICIONES DE USO")
    
    # Introduction paragraph
    pdf.add_paragraph(
        "En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la "
        "Sociedad de la Información y Comercio Electrónico (LSSI), se exponen a continuación los "
        "datos identificativos del titular del presente sitio web."
    )
    
    # Section 1
    pdf.create_section_title(1, "Datos Identificativos")
    pdf.add_bullet_point("Denominación Social", "NowNexus Group, S.L.")
    pdf.add_bullet_point("Número de NIF", "[insertar NIF/DNI]")
    pdf.add_bullet_point("Domicilio Social", "[insertar dirección]")
    pdf.add_bullet_point("Correo Electrónico de Contacto", "[insertar correo electrónico]")
    pdf.add_bullet_point("Datos de Inscripción Registral", "[insertar datos registrales si aplica, ej. Tomo, Folio, Hoja del Registro Mercantil]")
    pdf.ln(2)

    # Section 2
    pdf.create_section_title(2, "Condiciones de Acceso y Uso del Sitio Web")
    pdf.add_paragraph(
        "El acceso a este sitio web es libre y gratuito, atribuyendo a quien lo realiza la condición de "
        "Usuario. El uso del sitio web implica la aceptación plena y sin reservas de todas y cada una de "
        "las disposiciones incluidas en este Aviso Legal en la versión publicada por NowNexus Group, S.L. "
        "en el momento mismo en que el Usuario acceda al portal."
    )
    pdf.add_paragraph(
        "El Usuario se compromete a hacer un uso adecuado, lícito y prudente del sitio web, de conformidad "
        "con la ley, la moral, las buenas costumbres y el orden público. Queda expresamente prohibido "
        "cualquier uso con fines lesivos para los bienes o intereses de NowNexus Group, S.L., de terceros, "
        "o que de cualquier otra forma sobrecarguen, dañen o inutilicen las redes, servidores y demás equipos "
        "informáticos o aplicaciones del titular del sitio web o de terceros."
    )

    # Section 3
    pdf.create_section_title(3, "Propiedad Intelectual e Industrial")
    pdf.add_paragraph(
        "Todos los contenidos de este sitio web, incluyendo a título enunciativo pero no limitativo, textos, "
        "fotografías, gráficos, imágenes, logotipos, iconos, tecnología, software, links y demás contenidos "
        "audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual "
        "e industrial de NowNexus Group, S.L. o de terceros que han autorizados su uso."
    )
    pdf.add_paragraph(
        "Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra "
        "actividad similar sobre dichos contenidos sin la autorización expresa y por escrito de NowNexus Group, S.L. "
        "Los nombres comerciales, marcas o signos distintivos de cualquier clase contenidos en el sitio web están "
        "protegidos por la legislación vigente en materia de propiedad industrial."
    )

    # Section 4
    pdf.create_section_title(4, "Exclusión de Garantías y Responsabilidad")
    pdf.add_paragraph(
        "NowNexus Group, S.L. realiza los mayores esfuerzos para asegurar la exactitud y vigencia de la información "
        "del sitio web. Sin embargo, no garantiza la total ausencia de virus, errores o malware, ni la disponibilidad "
        "ininterrumpida del portal web."
    )
    pdf.add_paragraph(
        "El titular del sitio web no se hace responsable de los daños o perjuicios de cualquier naturaleza que "
        "pudieran derivarse de interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o "
        "desconexiones en el funcionamiento operativo del sistema electrónico, motivados por causas ajenas a "
        "NowNexus Group, S.L., ni de los daños que puedan ser causados por terceros mediante intromisiones ilegítimas."
    )

    # Section 5
    pdf.create_section_title(5, "Enlaces y Enlaces de Terceros")
    pdf.add_paragraph(
        "Este sitio web puede contener enlaces (links) a portales de terceros. NowNexus Group, S.L. no ejerce ningún "
        "tipo de control sobre dichos sitios y contenidos, por lo que declina cualquier tipo de responsabilidad "
        "respecto a la veracidad, disponibilidad y legalidad de la información contenida en enlaces de terceros."
    )

    # Section 6
    pdf.create_section_title(6, "Legislación Aplicable y Jurisdicción")
    pdf.add_paragraph(
        "Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las "
        "actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente "
        "las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso "
        "los Juzgados y Tribunales de la ciudad del domicilio social de la empresa."
    )

    pdf.output(output_path)
    print(f"Generated successfully: {output_path}")

def generate_politica_privacidad(output_path):
    pdf = LegalPDF()
    pdf.alias_nb_pages()
    pdf.set_margins(20, 20, 20)
    pdf.add_page()
    
    # Title
    pdf.create_title("POLÍTICA DE PRIVACIDAD (RGPD)")
    
    # Introduction
    pdf.add_paragraph(
        "De conformidad con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, "
        "relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales "
        "(Reglamento General de Protección de Datos o RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección "
        "de Datos Personales y garantía de los derechos digitales (LOPDGDD), se facilita la siguiente información "
        "sobre el tratamiento de sus datos personales."
    )
    
    # Section 1
    pdf.create_section_title(1, "Responsable del Tratamiento")
    pdf.add_bullet_point("Responsable", "NowNexus Group, S.L.")
    pdf.add_bullet_point("Número de NIF", "[insertar NIF/DNI]")
    pdf.add_bullet_point("Domicilio Postal", "[insertar dirección]")
    pdf.add_bullet_point("Correo Electrónico", "[insertar correo electrónico]")
    pdf.ln(2)

    # Section 2
    pdf.create_section_title(2, "Origen y Categoría de los Datos Tratados")
    pdf.add_paragraph(
        "Los datos personales tratados a través de nuestro sitio web proceden directamente del propio interesado "
        "cuando cumplimenta de manera voluntaria el formulario de contacto. Los datos que tratamos pertenecen a "
        "las siguientes categorías identificativas básicas:"
    )
    pdf.add_bullet_point("Datos Identificativos", "Nombre y apellidos.")
    pdf.add_bullet_point("Datos de Contacto", "Correo electrónico, número de teléfono corporativo.")
    pdf.add_bullet_point("Datos Profesionales", "Entidad o empresa en la que trabaja, cargo profesional.")
    pdf.add_bullet_point("Datos de Mensaje", "Asunto y contenido de la consulta realizada.")
    pdf.ln(2)

    # Section 3
    pdf.create_section_title(3, "Finalidad del Tratamiento")
    pdf.add_paragraph(
        "En NowNexus Group, S.L. tratamos la información facilitada por los interesados con las siguientes finalidades:"
    )
    pdf.add_bullet_point("Atención de Consultas", "Responder a las consultas, solicitudes, peticiones de información y presupuestos recibidos a través de los canales de contacto autorizados en la web.")
    pdf.add_bullet_point("Contacto Corporativo", "Mantener la comunicación profesional y comercial con representantes de empresas y administraciones que muestren interés en los servicios legales u organizativos de nuestra firma.")
    pdf.ln(2)

    # Section 4
    pdf.create_section_title(4, "Base Jurídica de Legitimación")
    pdf.add_paragraph(
        "La base jurídica para el tratamiento de sus datos es el consentimiento explícito otorgado por el usuario al "
        "marcar la casilla de verificación en el formulario de contacto ('He leído y acepto la Política de Privacidad') "
        "antes del envío de su consulta. Dicho consentimiento puede ser retirado en cualquier momento por el usuario."
    )

    # Section 5
    pdf.create_section_title(5, "Plazo de Conservación de los Datos")
    pdf.add_paragraph(
        "Los datos personales proporcionados se conservarán durante el periodo de tiempo necesario para gestionar y "
        "dar respuesta a su consulta, o hasta que el interesado ejerza su derecho de supresión o revoque el "
        "consentimiento prestado. Tras dicho plazo, los datos se mantendrán bloqueados durante los periodos de "
        "prescripción legal de posibles responsabilidades antes de ser eliminados definitivamente."
    )

    # Section 6
    pdf.create_section_title(6, "Destinatarios de Cesión de Datos")
    pdf.add_paragraph(
        "No se realizarán cesiones de datos personales a terceros, salvo obligación legal expresa o requerimiento judicial. "
        "Tampoco se realizan transferencias internacionales de datos hacia terceros países fuera del Espacio Económico "
        "Europeo."
    )

    # Section 7
    pdf.create_section_title(7, "Derechos de los Interesados")
    pdf.add_paragraph(
        "Los interesados tienen pleno derecho sobre sus datos personales y pueden ejercer los siguientes derechos regulados por el RGPD:"
    )
    pdf.add_bullet_point("Derecho de Acceso", "Confirmar si estamos tratando sus datos y conocer cuáles son.")
    pdf.add_bullet_point("Derecho de Rectificación", "Solicitar la corrección de datos inexactos o incompletos.")
    pdf.add_bullet_point("Derecho de Supresión (Olvido)", "Solicitar que se eliminen sus datos cuando ya no sean necesarios.")
    pdf.add_bullet_point("Derecho de Oposición", "Oponerse al tratamiento de sus datos para determinados fines.")
    pdf.add_bullet_point("Derecho de Limitación", "Solicitar la limitación temporal del tratamiento en los supuestos previstos por la ley.")
    pdf.add_bullet_point("Derecho de Portabilidad", "Recibir sus datos personales en un formato estructurado y de uso común.")
    pdf.ln(2)
    
    pdf.add_paragraph(
        "Para ejercer cualquiera de estos derechos, el interesado debe dirigir una comunicación por escrito, "
        "adjuntando fotocopia de su DNI o documento equivalente, a la dirección de correo electrónico del Responsable "
        "indicada en el Apartado 1."
    )
    pdf.add_paragraph(
        "Asimismo, si considera que sus derechos no han sido debidamente atendidos, tiene derecho a presentar una "
        "reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su portal oficial: https://www.aepd.es."
    )

    pdf.output(output_path)
    print(f"Generated successfully: {output_path}")

if __name__ == "__main__":
    # Ensure public folder exists
    os.makedirs("public", exist_ok=True)
    
    generate_aviso_legal(os.path.join("public", "aviso-legal.pdf"))
    generate_politica_privacidad(os.path.join("public", "politica-privacidad.pdf"))
