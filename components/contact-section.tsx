"use client"

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

const MailIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const PhoneIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const MapPinIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const SendIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

export function ContactSection() {
  return (
    <section className="py-20 px-4 relative">
       <div className={`absolute top-0 -mt-15 left-1/2 -translate-x-1/2 animate-planet-float-medium  opacity-30`}>
      <div className="relative w-[25rem] h-[25rem]">
        {/* Sun core */}
        <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_0_100px_rgba(255,170,0,0.25)]
                        bg-[radial-gradient(closest-side,rgba(255,230,150,1),rgba(255,180,0,0.95),rgba(255,100,0,0.9))]
                        ring-1 ring-yellow-200/20 animate-[sunspin_48s_linear_infinite]">
          {/* Granulation noise (soft) */}
          <div className="absolute inset-0 rounded-full mix-blend-overlay
                          bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.08),transparent_45%)]" />

          {/* Bright core pulse */}
          <div className="absolute inset-0 rounded-full bg-yellow-200/10 blur-3xl animate-[solarPulse_6s_ease-in-out_infinite]" />

          {/* Flares / prominences */}
          <div className="absolute -inset-2 rounded-full border-[14px] border-orange-400/20 blur-[6px] animate-[flarewiggle_9s_ease-in-out_infinite]" />
          <div className="absolute -inset-4 rounded-full border-[12px] border-amber-400/15 blur-[10px] animate-[flarewiggle_12s_ease-in-out_infinite]" />
          <div className="absolute -inset-6 rounded-full border-[10px] border-red-400/10 blur-[14px] animate-[flarewiggle_15s_ease-in-out_infinite]" />
        </div>

        {/* Outer glow halo */}
        <div className="absolute inset-0 rounded-full bg-yellow-300/25 blur-[50px] animate-pulse-glow" />
      </div>

      {/* Sparkles */}
      <div className="absolute -top-3 -left-4 w-1.5 h-1.5 bg-yellow-100/80 rounded-full animate-float-particle" />
      <div className="absolute -bottom-2 -right-5 w-1.5 h-1.5 bg-orange-100/70 rounded-full animate-float-particle-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute -top-7 right-8 w-2 h-2 bg-amber-50/80 rounded-full animate-float-particle-fast" style={{ animationDelay: "2s" }} />
    </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="animate-float-gentle text-center hover:shadow-lg transition-shadow border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-md hover:from-purple-800/30 hover:to-blue-800/30">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MailIcon />
              </div>
              <h3 className="font-semibold mb-2 text-white">Email</h3>
              <p className="text-purple-200">satrio@example.com</p>
            </CardContent>
          </Card>

          <Card className="animate-float-gentle-slow text-center hover:shadow-lg transition-shadow border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-md hover:from-purple-800/30 hover:to-blue-800/30">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <PhoneIcon />
              </div>
              <h3 className="font-semibold mb-2 text-white">Phone</h3>
              <p className="text-purple-200">+62 123 456 7890</p>
            </CardContent>
          </Card>

          <Card className="animate-float-gentle text-center hover:shadow-lg transition-shadow border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-md hover:from-purple-800/30 hover:to-blue-800/30">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPinIcon />
              </div>
              <h3 className="font-semibold mb-2 text-white">Location</h3>
              <p className="text-purple-200">Jakarta, Indonesia</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="animate-pulse-glow bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium"
          >
            <SendIcon />
            <span className="ml-2">Start a Conversation</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
