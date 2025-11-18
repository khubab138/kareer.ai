"use client";

import HeroSection from "@/components/hero";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { features } from "@/data/features";
import { howItWorks } from "../data/howitWorks";
import { testimonial } from "@/data/testimonial ";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid-background" />
      <HeroSection />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Tools that Push your Career Forward
          </h2>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => {
              return (
                <Card
                  key={i}
                  className="border-2 bg-background hover:border-primary transition-colors duration-300"
                >
                  <CardContent
                    className={" text-center flex flex-col items-center"}
                  >
                    <div className="flex flex-col items-center justify-center">
                      {feature.icon}
                      <h3 className="text-xl font-bold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24  bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold ">50+</h3>
              <p className="text-muted-foreground">Industeries Covered</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold ">1000+</h3>
              <p className="text-muted-foreground">Interview Question</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold ">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold ">24/7</h3>
              <p className="text-muted-foreground">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold  mb-4">How it Works</h2>
            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center space-y-4 "
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h1 className="font-semibold text-xl">{item.title}</h1>
                  <p className="text-muted-foreground text-center">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            What are User Say
          </h2>
          <div className="grid grid-col-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, i) => {
              return (
                <Card key={i} className="bg-background">
                  <CardContent className={"pt-3"}>
                    <div className="flex flex-col space-x-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-12 w-12 shrink-0">
                          <Image
                            width={40}
                            height={40}
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="rounded-full object-cover border-2 border-primary/20"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                          <p className="text-sm text-primary">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <blockquote className="mt-4">
                        <p className="text-md text-muted-foreground italic relative">
                          <span className="text-3xl text-primary absolute -top-4 -left-3">
                            &quot;
                          </span>
                          {testimonial.quote}
                          <span className="text-3xl text-primary absolute -bottom-4">
                            &quot;
                          </span>
                        </p>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
