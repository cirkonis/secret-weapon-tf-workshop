import StarIcon from "../icons/StarIcon";
import Image from "next/image";
import computasLogo from '../public/logo.png'
import terraformHero from '../public/terraform.png'
import WorkshopCountdown from "./WorkshopCountdown";
import TheButton from "./TheButton";


export default function Hero() {
    return <>
        <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
            {/* LEFT SIDE */}
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div>
                    <div>
                        <Image
                            src={computasLogo}
                            alt="Your Company"
                            width={550}
                            height={230}
                        />
                    </div>
                    <div className="mt-20">
                        <div>
                            <a href="#" className="inline-flex space-x-4">
                                <span className="rounded px-2.5 py-1 text-md font-semibold text-computas-primary">
                                    Developer Professional Team Workshop
                                </span>
                                <span className="inline-flex items-center space-x-1 text-lg font-bold text-computas-secondary">
                                    <span>November 23, 2022 16:00</span>
                                </span>
                            </a>
                        </div>
                        <div className="mt-6 sm:max-w-xl">
                            <h1 className="text-4xl font-bold tracking-tight text-computas-primary sm:text-5xl">
                                Throwing some light on <span className="text-terraform"> Terraform</span>
                            </h1>
                            <p className="mt-6 text-xl text-gray-500">
                                Some say it takes a key to unlock secrets. We think it takes a secret weapon. Join us for a workshop run by none other than the Computas secret weapon!
                            </p>
                        </div>
                        <div className="flex justify-center items-center mt-6 sm:flex sm:w-full sm:max-w-lg">
                            <div className='border-computas-primary bg-computas-primary border-1 p-6 rounded-md'>
                                <WorkshopCountdown></WorkshopCountdown>
                            </div>
                            <TheButton></TheButton>
                        </div>
                        <div className="mt-6">
                            <div className="inline-flex items-center divide-x divide-gray-300">
                                <div className="flex pr-5">
                                    <StarIcon></StarIcon>
                                    <StarIcon></StarIcon>
                                    <StarIcon></StarIcon>
                                    <StarIcon></StarIcon>
                                    <StarIcon empty={true}></StarIcon>
                                </div>
                                <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
                                    <span className="font-medium text-gray-900">Pre-rated 4 out of 5 stars</span> by {' '}
                                    <span className="font-bold text-computas-secondary">Mike</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <div className="hidden sm:block">
                        <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
                        <svg
                            className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                            width={404}
                            height={392}
                            fill="none"
                            viewBox="0 0 404 392"
                        >
                            <defs>
                                <pattern
                                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                        </svg>
                    </div>
                    <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                        <Image
                            className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                            src={terraformHero}
                            alt="Terraform with a lamp"
                            width={650}
                            height={900}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
}