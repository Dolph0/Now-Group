import { z } from 'zod';

export const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  cargo: z
    .string()
    .min(2, 'El cargo debe tener al menos 2 caracteres')
    .max(100, 'El cargo no puede exceder 100 caracteres'),
  entidad: z
    .string()
    .min(2, 'La entidad o empresa debe tener al menos 2 caracteres')
    .max(200, 'La entidad no puede exceder 200 caracteres'),
  email: z
    .string()
    .email('Por favor, introduzca un correo electrónico corporativo válido')
    .min(1, 'El correo electrónico es obligatorio'),
  telefono: z
    .string()
    .min(6, 'El teléfono debe tener al menos 6 caracteres')
    .max(20, 'El teléfono no puede exceder 20 caracteres')
    .regex(/^[+\d\s()-]+$/, 'Formato de teléfono no válido'),
  asunto: z
    .string()
    .min(5, 'El asunto debe tener al menos 5 caracteres')
    .max(200, 'El asunto no puede exceder 200 caracteres'),
  mensaje: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje no puede exceder 2000 caracteres'),
  consentimientoRGPD: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Debe aceptar la Política de Privacidad para continuar',
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
