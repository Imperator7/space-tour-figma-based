export const TECHS = ['Launch_vehicle', 'Spaceport', 'Space_capsule'] as const
export type TECH = (typeof TECHS)[number]

type TECH_DATA = {
  name: string
  images: {
    portrait: string
    landscape: string
    focalPoint: string
  }
  description: string
}

export const TECH_ASSETS: Record<TECH, TECH_DATA> = {
  Launch_vehicle: {
    name: 'Launch vehicle',
    images: {
      portrait: './assets/technology/image-launch-vehicle-portrait.jpg',
      landscape: './assets/technology/image-launch-vehicle-landscape.jpg',
      focalPoint: 'bottom',
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  Spaceport: {
    name: 'Spaceport',
    images: {
      portrait: './assets/technology/image-spaceport-portrait.jpg',
      landscape: './assets/technology/image-spaceport-landscape.jpg',
      focalPoint: 'bottom',
    },
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  },
  Space_capsule: {
    name: 'Space capsule',
    images: {
      portrait: './assets/technology/image-space-capsule-portrait.jpg',
      landscape: './assets/technology/image-space-capsule-landscape.jpg',
      focalPoint: 'center',
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
}
