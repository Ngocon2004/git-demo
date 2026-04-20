"use client";

import { useState } from "react";
import Link from "next/link";
import { Country } from "@/types/country";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function CountryList({ initialCountries }: { initialCountries: Country[] }) {
  const [search, setSearch] = useState("");

  const filteredCountries = initialCountries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto md:mx-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Tìm kiếm quốc gia..."
          className="pl-10 h-12 rounded-xl border-gray-200 dark:border-zinc-800 focus:ring-emerald-500 shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredCountries.length === 0 ? (
        <div className="text-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed">
          <p className="text-muted-foreground font-medium">Không tìm thấy quốc gia nào khớp với "{search}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCountries.map((country) => (
            <Link key={country.cca3} href={`/countries/${country.name.common}`}>
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group border-gray-100 dark:border-zinc-800">
                <div className="aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-zinc-800">
                  <img
                    src={country.flags.svg}
                    alt={country.flags.alt || country.name.common}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="p-5">
                  <CardTitle className="text-xl line-clamp-1">{country.name.common}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-[10px] uppercase font-bold tracking-wider">
                      {country.region}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-5 pt-0 text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Thủ đô:</span>
                    <span className="font-medium">{country.capital?.[0] || "N/A"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dân số:</span>
                    <span className="font-medium">{country.population.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
