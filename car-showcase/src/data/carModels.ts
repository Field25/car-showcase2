export interface CarModel {
  name: string;
  type: string;
  imageUrl: string;
  alt: string;
}

export const carModels: Record<string, CarModel[]> = {
  ehev: [
    {
      name: 'City',
      type: 'e:HEV / Turbo',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fcity%2F1709189815_867.png&w=640&q=75',
      alt: 'Honda City'
    },
    {
      name: 'City Hatchback',
      type: 'e:HEV / Turbo',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fcityhatchback%2F1705403055_103.png&w=640&q=75',
      alt: 'Honda City Hatchback'
    },
    {
      name: 'Civic',
      type: 'e:HEV / Turbo',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fmodel%2F2025%2F05%2F16%2FPsf2rhIZNGKopsphcEXEk1CJarDlzwHl.png&w=640&q=75',
      alt: 'Honda Civic'
    },
    {
      name: 'HR-V',
      type: 'e:HEV',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fmodel%2F2025%2F05%2F16%2FSIeHBvAIUUBqIwEIgQaB39aQheeFZjpy.png&w=640&q=75',
      alt: 'Honda HR-V'
    },
    {
      name: 'Accord',
      type: 'e:HEV',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fmodel%2F2025%2F08%2F20%2F2HmYg7evH4GrEYpB4bg2CEJkDwz3kncj.png&w=640&q=75',
      alt: 'Honda Accord'
    }
  ],
  suv: [
    {
      name: 'WR-V',
      type: 'Other',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fwrv%2F4e9d1f4b44dc0d813000e1c491132b7590.png&w=640&q=75',
      alt: 'WR-V'
    },
    {
      name: 'BR-V',
      type: 'Other',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fbrv%2F2025%2F03%2F20%2FiyDyHbv8kuVgoJ7EHjwCFSh6KP8yFEgx.png&w=640&q=75',
      alt: 'BR-V'
    },
    {
      name: 'HR-V',
      type: 'e:HEV',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fmodel%2F2025%2F05%2F16%2FSIeHBvAIUUBqIwEIgQaB39aQheeFZjpy.png&w=640&q=75',
      alt: 'HR-V e:HEV'
    },
    {
      name: 'e:N1',
      type: 'EV',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fen1%2F2025%2F03%2F24%2FQISIPapqg9Sahh6uwA3Cz7X6OHPrSlDD.png&w=640&q=75',
      alt: 'e:N1'
    },
    {
      name: 'CR-V',
      type: 'e:HEV / Turbo',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fcrv%2F1b4f132ca7fcee27c3718f92364fdec359.png&w=640&q=75',
      alt: 'CR-V'
    }
  ],
  sedan: [
    {
      name: 'City',
      type: 'e:HEV / Turbo',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fcity%2F1709189815_867.png&w=640&q=75',
      alt: 'Honda City'
    },
    {
      name: 'Civic',
      type: 'e:HEV / Turbo',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fmodel%2F2025%2F05%2F16%2FPsf2rhIZNGKopsphcEXEk1CJarDlzwHl.png&w=640&q=75',
      alt: 'Honda Civic'
    },
    {
      name: 'Accord',
      type: 'e:HEV',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fmodel%2F2025%2F08%2F20%2F2HmYg7evH4GrEYpB4bg2CEJkDwz3kncj.png&w=640&q=75',
      alt: 'Honda Accord'
    }
  ],
  hatchback: [
    {
      name: 'City Hatchback',
      type: 'e:HEV / Turbo',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fcityhatchback%2F1705403055_103.png&w=750&q=75',
      alt: 'Honda City Hatchback'
    },
    {
      name: 'Civic Type R',
      type: 'Turbo',
      imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fmodel%2F2025%2F06%2F18%2FZzbyrVYrU1OdCT58NEQLTVFVMArUyRYd.png&w=750&q=75',
      alt: 'Civic Type R'
    }
  ]
};