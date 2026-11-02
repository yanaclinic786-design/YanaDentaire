import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/clinic/layout";
import {
  Eyebrow,
  FAQ,
  GalleryGrid,
  MediaSlot,
  ReviewList,
  ServiceGrid,
} from "@/components/clinic/shared";
import { clinic, faqs, pageHead } from "@/lib/clinic";
import { contentQuery } from "@/lib/content-query";

const heroSlides = [
  {
    src: "/images/yana-0602.jpg",
    alt: "Dr. Ravi Sachdeva at Yana’s Dentaire",
    caption: "Meet your neighbourhood dentists",
  },
  {
    src: "/images/yana-0620.jpg",
    alt: "A modern treatment room at Yana’s Dentaire",
    caption: "A comfortable space for your care",
  },
  {
    src: "/images/yana-0632.jpg",
    alt: "A dentist caring for a patient at Yana’s Dentaire",
    caption: "Personal care, every visit",
  },
];

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(contentQuery),
  head: () =>
    pageHead(
      "Dentist in Noida Sector 105 | Yana's Dentaire",
      "Visit Yana’s Dentaire, a dental clinic and implant centre in Sector 105, Noida. Explore treatments and request an appointment.",
      "/",
      { faq: faqs },
    ),
  component: Home,
});

function Home() {
  const { data } = useSuspenseQuery(contentQuery);
  const hero = data.media.find((media) => media.slot === "hero");
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const hasManagedHero = Boolean(hero);

  useEffect(() => {
    if (
      hasManagedHero ||
      isHeroPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [hasManagedHero, isHeroPaused]);

  const changeSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  return (
    <>
      <section className="clinic-hero home-hero">
        <div className="container-clinic home-hero-inner">
          <div className="home-hero-copy reveal">
            <Eyebrow>Your neighbourhood dentist in Sector 105</Eyebrow>
            <h1 className="home-hero-title">
              A little care.
              <br />
              <span>A brighter smile.</span>
            </h1>
            <p className="home-hero-description">
              Thoughtful dental care, personal to you. At Yana’s Dentaire, every visit starts with a
              conversation — and a plan that feels right.
            </p>
            <div className="hero-actions home-hero-actions">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Plan your first visit <ArrowUpRight />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">
                  Meet your dentists <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="home-proof">
              <span className="home-proof-icon">
                <Star />
              </span>
              <span className="home-proof-rating">
                <strong>{clinic.rating.toFixed(1)}</strong>
                <span className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
                <span className="home-proof-caption">{clinic.reviewCount} Google reviews</span>
              </span>
              <span className="home-proof-divider" aria-hidden="true" />
              <span className="home-proof-location">
                <MapPin />
                Sector 105, Noida
              </span>
            </div>
          </div>

          <div className="home-hero-art reveal">
            <div
              className="home-hero-frame"
              onMouseEnter={() => setIsHeroPaused(true)}
              onMouseLeave={() => setIsHeroPaused(false)}
              onFocusCapture={() => setIsHeroPaused(true)}
              onBlurCapture={(event) => {
                const nextTarget = event.relatedTarget;
                if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
                  setIsHeroPaused(false);
                }
              }}
            >
              {hero?.media_type === "video" ? (
                <>
                  <img
                    className="hero-image home-hero-fallback"
                    src="/images/yana-0632.jpg"
                    width="1350"
                    height="1800"
                    alt=""
                    fetchPriority="high"
                  />
                  <video
                    className="hero-image home-hero-video"
                    src={hero.url}
                    poster="/images/yana-0632.jpg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={hero.caption || "A look inside the clinic"}
                  />
                </>
              ) : hero?.media_type === "image" ? (
                <img
                  className="hero-image"
                  src={hero.url}
                  width="1350"
                  height="1800"
                  alt={hero.caption || "A view inside Yana’s Dentaire"}
                  fetchPriority="high"
                />
              ) : (
                <div className="home-hero-slides" aria-live="off">
                  {heroSlides.map((slide, index) => (
                    <img
                      key={slide.src}
                      className={`hero-image home-hero-slide${index === activeSlide ? " is-active" : ""}`}
                      src={slide.src}
                      width="1350"
                      height="1800"
                      alt={index === activeSlide ? slide.alt : ""}
                      aria-hidden={index !== activeSlide}
                      fetchPriority={index === 0 ? "high" : "auto"}
                    />
                  ))}
                </div>
              )}
              <div className="home-hero-photo-note">
                <span>Care that feels personal</span>
                <strong>
                  {hero?.caption ||
                    heroSlides[activeSlide]?.caption ||
                    "A familiar face, close to home"}
                </strong>
                <small>Thoughtful dentistry in Sector 105</small>
              </div>
              {!hasManagedHero && (
                <div className="home-hero-controls" role="group" aria-label="Hero image controls">
                  <button
                    type="button"
                    className="home-hero-arrow"
                    aria-label="Previous hero image"
                    onClick={() => changeSlide(-1)}
                  >
                    <ChevronLeft />
                  </button>
                  <div className="home-hero-dots">
                    {heroSlides.map((slide, index) => (
                      <button
                        key={slide.src}
                        type="button"
                        className={`home-hero-dot${index === activeSlide ? " is-active" : ""}`}
                        aria-label={`Show image ${index + 1}: ${slide.caption}`}
                        aria-pressed={index === activeSlide}
                        onClick={() => setActiveSlide(index)}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="home-hero-arrow"
                    aria-label="Next hero image"
                    onClick={() => changeSlide(1)}
                  >
                    <ChevronRight />
                  </button>
                </div>
              )}
            </div>
            <div className="home-hero-stamp" aria-hidden="true">
              <Heart />
              <span>
                Here for
                <br />
                your smile
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="trust-strip" aria-label="What makes Yana’s Dentaire different">
        <div className="trust-marquee">
          {[0, 1].map((copy) => (
            <div
              className="trust-marquee-group"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              <div className="trust-item">
                <Heart /> A personal approach
              </div>
              <div className="trust-item">
                <ShieldCheck /> Thoughtful treatment plans
              </div>
              <div className="trust-item">
                <Star /> 5.0 Google rating
              </div>
              <div className="trust-item">
                <MapPin /> Your neighbourhood dentist
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container-clinic">
          <div className="section-heading">
            <div>
              <Eyebrow>Care for every smile</Eyebrow>
              <h2>A healthier smile starts here.</h2>
              <p className="section-intro">
                From everyday care to a fresh start, find a treatment that fits you.
              </p>
            </div>
            <Button variant="link" asChild>
              <Link to="/services">
                All treatments <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <ServiceGrid limit={4} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-clinic split-section">
          <MediaSlot slot="intro" content={data} />
          <div>
            <Eyebrow>Good dentistry. Genuine care.</Eyebrow>
            <h2>
              A familiar face.
              <br />A thoughtful approach.
            </h2>
            <p className="section-intro">
              At Yana’s Dentaire, your visit starts with a conversation. Discuss your concerns,
              understand your choices, and take the next step with clarity.
            </p>
            <div className="check-list">
              <div>
                <Check /> Care shaped around your needs
              </div>
              <div>
                <Check /> Clear conversations about your options
              </div>
              <div>
                <Check /> Conveniently located in Sector 105
              </div>
            </div>
            <Button asChild variant="link" className="mt-5 px-0">
              <Link to="/about">
                Meet your dentists <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-clinic">
          <div className="section-heading">
            <div>
              <Eyebrow>Inside our clinic</Eyebrow>
              <h2>A closer look at your care.</h2>
            </div>
            <Button asChild variant="link">
              <Link to="/gallery">
                Visit the gallery <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <GalleryGrid content={data} limit={3} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-clinic">
          <Eyebrow>Words that matter</Eyebrow>
          <div className="section-heading">
            <h2>Small moments. Meaningful smiles.</h2>
            <span className="text-sm">
              <strong>5.0</strong> <span className="stars">★★★★★</span>{" "}
              <span className="text-xs text-muted-foreground">(11 Google reviews)</span>
            </span>
          </div>
          <ReviewList content={data} />
          <Button asChild variant="link" className="mt-5 px-0">
            <Link to="/reviews">
              Patient reviews <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="container-clinic split-section">
          <div>
            <Eyebrow>A little clarity</Eyebrow>
            <h2>Questions? Let’s talk.</h2>
            <p className="section-intro">
              A comfortable first visit begins with knowing what to expect.
            </p>
            <Button asChild variant="link" className="mt-4 px-0">
              <a href={`tel:${clinic.tel}`}>
                <Phone /> {clinic.phone}
              </a>
            </Button>
          </div>
          <FAQ />
        </div>
      </section>
      <CTA />
    </>
  );
}
