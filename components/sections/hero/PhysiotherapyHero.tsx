import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { businessInfo } from "@/lib/data/business-info"

// =============================================================================
// CONFIGURATION
// =============================================================================

const heroContent = {
  logo: "/uploads/Pro-Active-Therapy.gif",
  logoAlt: "Pro-Active Therapy Logo",
  businessName: "Pro-Active Therapy",
  tagline: "Move Better, Feel Better, Live Better",
  description: "Expert physiotherapy care tailored to your recovery journey. Our experienced team combines evidence-based treatment with personalized care to help you achieve optimal movement and wellness.",
  ctaText: "Book Appointment",
  ctaUrl: businessInfo.bookingUrl || "/contact",
  phoneCtaText: "Call Now",
  backgroundImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop&q=80",
  backgroundImageAlt: "Modern physiotherapy treatment room with exercise equipment",
}

// =============================================================================
// COMPONENT
// =============================================================================

export interface PhysiotherapyHeroProps {
  /** Override logo image URL */
  logo?: string
  /** Override business name */
  businessName?: string
  /** Override tagline */
  tagline?: string
  /** Override description */
  description?: string
  /** Override CTA button text */
  ctaText?: string
  /** Override CTA button URL */
  ctaUrl?: string
  /** Override background image */
  backgroundImage?: string
  /** Additional CSS classes */
  className?: string
}

/**
 * Hero section for Pro-Active Therapy physiotherapy website.
 * Features prominent logo display, compelling headline, and dual CTAs.
 *
 * @example
 * <PhysiotherapyHero />
 */
export function PhysiotherapyHero(props: PhysiotherapyHeroProps = {}) {
  const displayLogo = props.logo ?? heroContent.logo
  const displayBusinessName = props.businessName ?? heroContent.businessName
  const displayTagline = props.tagline ?? heroContent.tagline
  const displayDescription = props.description ?? heroContent.description
  const displayCtaText = props.ctaText ?? heroContent.ctaText
  const displayCtaUrl = props.ctaUrl ?? heroContent.ctaUrl
  const displayBackgroundImage = props.backgroundImage ?? heroContent.backgroundImage

  return (
    <section
      className={cn(
        "mx-auto mt-4 flex min-h-[600px] max-w-7xl flex-col items-center p-2 pt-0 md:min-h-[700px] lg:min-h-[calc(100vh-136px)] xl:max-w-none 2xl:px-48",
        props.className
      )}
    >
      <div className="relative flex w-full flex-1 flex-col overflow-hidden rounded-4xl bg-gradient-to-br from-background to-secondary/20 lg:flex-row">
        {/* Left Column - Content */}
        <div className="relative z-10 flex flex-1 flex-col justify-center gap-8 p-8 lg:w-1/2 lg:p-16 xl:p-20">
          {/* Logo */}
          <div className="animate-fade-in-up flex items-center gap-4 motion-reduce:animate-none">
            <div className="relative h-20 w-20 flex-shrink-0 md:h-24 md:w-24">
              <Image
                src={displayLogo}
                alt={heroContent.logoAlt}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 80px, 96px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground md:text-3xl">
                {displayBusinessName}
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="animate-fade-in-up animation-delay-100 flex flex-col gap-4 motion-reduce:animate-none">
            <h1 className="text-balance font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              {displayTagline}
            </h1>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              {displayDescription}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-200 flex flex-col gap-4 sm:flex-row motion-reduce:animate-none">
            {/* Primary CTA */}
            <Link
              href={displayCtaUrl}
              className="group relative flex min-h-12 items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 ease-out hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span className="flex items-center gap-x-2">
                {displayCtaText}
                <span className="relative inline-block h-4 w-4">
                  <ChevronRight
                    className="absolute left-0 top-0 h-4 w-4 transition-[transform,opacity] duration-200 group-hover:translate-x-1 group-hover:opacity-0"
                    aria-hidden="true"
                  />
                  <ArrowRight
                    className="absolute left-0 top-0 h-4 w-4 -translate-x-1 opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </span>
              </span>
            </Link>

            {/* Secondary CTA - Phone */}
            {businessInfo.phone && (
              <Link
                href={`tel:${businessInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="group flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-primary bg-background px-8 py-3 font-semibold text-primary transition-all duration-200 ease-out hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Phone className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                {heroContent.phoneCtaText}
              </Link>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-in-up animation-delay-300 flex flex-wrap items-center gap-6 border-t border-border pt-6 text-sm text-muted-foreground motion-reduce:animate-none">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Licensed Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Evidence-Based Care</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Personalized Treatment</span>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-64 w-full overflow-hidden lg:h-auto lg:w-1/2">
          {/* Background Image */}
          <Image
            src={displayBackgroundImage}
            alt={heroContent.backgroundImageAlt}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Gradient Overlay for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent lg:from-background/60 lg:via-transparent" />

          {/* Decorative Element - subtle movement pattern */}
          <div className="absolute bottom-8 right-8 hidden lg:block">
            <div className="relative h-32 w-32 opacity-20">
              <div className="absolute inset-0 animate-pulse rounded-full bg-primary/30 motion-reduce:animate-none" />
              <div className="animation-delay-300 absolute inset-4 animate-pulse rounded-full bg-primary/40 motion-reduce:animate-none" />
              <div className="animation-delay-600 absolute inset-8 animate-pulse rounded-full bg-primary/50 motion-reduce:animate-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
