import { Helmet } from 'react-helmet-async'

interface SEOProps {
    title?: string
    description?: string
    keywords?: string
    image?: string
    url?: string
}

const SEO = ({
    title = "Giorgio Interdonato | Código Guerrero Dev",
    description = "Portafolio profesional de Giorgio Interdonato — Comunicador Audiovisual, Ingeniero en Administración de RRHH y Desarrollador Android Trainee. Emprendedor, creador de contenido digital y autodidacta desde Valparaíso, Chile.",
    keywords = "Giorgio Interdonato, Código Guerrero Dev, Comunicador Audiovisual, Ingeniero RRHH, Desarrollador Android Trainee, Kotlin, React, Portafolio Chile, Vibecoding, Autodidacta, AK Creaciones, Lanza tu Marca Digital",
    image = "/images/projects/codigoguerrerodev.png",
    url = "https://codigoguerrerodev.web.app/"
}: SEOProps) => {

    const schemaOrgJSONLD = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Giorgio Interdonato",
        "url": "https://codigoguerrerodev.web.app/",
        "image": "https://codigoguerrerodev.web.app/images/projects/codigoguerrerodev.png",
        "sameAs": [
            "https://github.com/DonGeeo87",
            "https://www.linkedin.com/in/giorgiointerdonato/",
            "https://www.instagram.com/ak.creaciones/"
        ],
        "jobTitle": "Comunicador Audiovisual | Ingeniero en Administración de RRHH | Desarrollador Android Trainee",
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "description": description
    }

    return (
        <Helmet>
            {/* Base Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>
        </Helmet>
    )
}

export default SEO