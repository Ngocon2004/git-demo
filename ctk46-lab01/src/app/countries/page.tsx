import Link from "next/link";
import { Country } from "@/types/country";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

async function getCountries(): Promise<Country[]> {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags,population,region,capital");
  if (!res.ok) throw new Error("Không thể tải dữ liệu quốc gia");
  const data = await res.json();
  // Sắp xếp theo tên
  return data.sort((a: Country, b: Country) => a.name.common.localeCompare(b.name.common));
}

export default async function CountriesPage() {
  const countries = await getCountries();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Khám phá Thế giới</h1>
          <p className="text-muted-foreground">Dữ liệu thực tế từ REST Countries API</p>
        </div>
        <Badge variant="outline" className="w-fit h-fit px-4 py-1 text-sm">
          {countries.length} Quốc gia & Vùng lãnh thổ
        </Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {countries.map((country) => (
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
    </div>
  );
}
