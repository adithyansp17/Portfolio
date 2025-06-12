import React from "react";
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website built with Next.js",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <section className="text-center">
          <h1 className="text-4xl font-bold">ADITHYAN S P</h1>
          <p className="text-lg text-gray-400 mt-2">
            Full Stack Developer | Open Source Enthusiast
          </p>
        </section>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-300">
              Brief introduction about yourself, your background, and your passion
              for development.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-300">
                Project 1 - Description and tech stack
              </li>
              <li className="text-gray-300">
                Project 2 - Description and tech stack
              </li>
              <li className="text-gray-300">
                Project 3 - Description and tech stack
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300">Email: your.email@example.com</p>
            <Button className="mt-4">Download Resume</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
