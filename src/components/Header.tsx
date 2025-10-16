import { Award } from "lucide-react"

export function Header() {
  return (
    <header className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <Award className="h-10 w-10 text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">Projeto React</p>
              <p className="text-emerald-100 text-sm">Forms</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}