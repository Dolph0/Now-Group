import { ImageResponse } from 'next/og';

// Ruta canónica recomendada por Next.js para App Router icons
export const runtime = 'edge';

// Dimensiones de la imagen
export const size = {
    width: 32,
    height: 32,
};

export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // Contenedor principal
            <div
                style={{
                    fontSize: 14,
                    background: 'transparent',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Círculo perfecto con fondo blanco */}
                <div
                    style={{
                        background: 'white',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        color: 'black',
                        fontWeight: 800,
                        fontFamily: 'sans-serif',
                        border: '1px solid #f0f0f0', // Un borde sutil para que no se pierda en fondos claros
                    }}
                >
                    NNG
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
