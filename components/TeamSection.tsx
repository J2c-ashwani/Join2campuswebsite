"use client"

import { teamData } from "@/lib/data"
import * as TeamImageModule from "@/components/TeamImage"

// ✅ Fix: ensure we use the default export
const TeamImage = TeamImageModule.default

export default function TeamSection() {
  console.log("DEBUG -> typeof TeamImage:", typeof TeamImage)
  console.log("DEBUG -> TeamImage:", TeamImage)

  return (
    <section id="team" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Meet The Team Behind Join2Campus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-indigo-200 shadow-md">
                {TeamImage ? (
                  <TeamImage
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                  />
                ) : (
                  <p className="text-red-500">⚠ Image component missing</p>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-medium mb-3">
                {member.title}
              </p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
