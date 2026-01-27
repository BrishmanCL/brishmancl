'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = [
  '/images/clients/Cano-Contratista-S.A.C. - Cliente.png',
  '/images/clients/Applus - Cliente.png',
  '/images/clients/Whats-Bot - Cliente.png',
  '/images/clients/Tech-Peru-Proveedor - Cliente.png',
  '/images/clients/CGI-Gestión-e-Innovación - Cliente.png',
]

export default function ClientsCompanies() {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-28 max-md:gap-14"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 20,
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center min-w-[150px]">
            <Image
              src={logo}
              alt={`Cliente ${i}`}
              width={150}
              height={75}
              className="object-contain hover:grayscale-0 transition"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
