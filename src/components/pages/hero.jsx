import React from 'react'
import { Icon } from '@iconify/react'
import me from '../../imgs/me.svg'

export default function Hero() {
  const footerIcons = [
    { icon: 'ic:baseline-telegram', href: 'https://t.me/Dev_3ss' },
    {
      icon: 'mdi:linkedin',
      href: 'https://www.linkedin.com/in/shahryar-pirooz-6279381a5',
    },
    { icon: 'mdi:github', href: 'https://github.com/Shahryar-Pirooz' },
  ]
  return (
    <div className="flex flex-col flex-nowrap w-screen h-screen">
      <div className="flex flex-row flex-nowrap justify-center basis-4/5">
        <div className="grid items-center">
          <div className="mx-auto lg:ml-16 lg:mr-4">
            <p className="text-center text-lg text-body lg:text-start ">
              Howdy
            </p>
            <h1 className="text-center text-5xl font-bold leading-tight text-head lg:text-start">
              I’m <span className="text-primary">Shahryar</span> <br />
              An Android And <wbr />
              Web Developer
            </h1>
            <p className="text-center text-lg text-body lg:text-start">
              I'm a highly driven, devoted MERN stack developer who,
              <wbr />
              besides all things technology, also loves music and art!
            </p>
          </div>
        </div>
        <div className="hidden lg:grid items-center shrink-0 mr-4">
          <img src={me} alt="it's me" />
        </div>
      </div>
      <div className="flex flex-col flex-nowrap basis-1/5">
        <div className="flex flex-row flex-nowrap justify-center">
          {footerIcons.map((icon) => {
            return (
              <a key={icon.icon} href={icon.href}>
                <Icon
                  icon={icon.icon}
                  className="text-xl text-head hover:text-primary mx-1"
                />
              </a>
            )
          })}
        </div>
        <div>
          <p className="text-head text-sm text-center">
            Designed and build by Shahryar
            <br />
            2022
          </p>
        </div>
      </div>
    </div>
  )
}
