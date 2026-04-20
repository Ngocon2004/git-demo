import Link from "next/link";
import { notFound } from "next/navigation";
import { Country } from "@/types/country";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface CountryPageProps {
  params: Promise<{ name: string }>;
}

async function getCountry(name: string): Promise<Country> {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
  if (!res.ok) notFound();
  const data = await res.json();
  return data[0];
}

export default async function CountryDetailPage({ params }: CountryPageProps) {
  const { name } = await params;
  const country = await getCountry(name);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/countries" className="mb-8 inline-block">
        <Button variant="ghost" className="p-0 hover:bg-transparent flex items-center gap-2 text-emerald-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Quay lại danh sách
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-zinc-800">
            <img
              src={country.flags.svg}
              alt={country.flags.alt || country.name.common}
              className="w-full h-auto object-cover"
            />
          </div>
          <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer" className="block w-full">
            <Button className="w-full" size="lg">
              Xem trên Google Maps
            </Button>
          </a>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge>{country.region}</Badge>
              <Badge variant="outline">{country.cca3}</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-1">{country.name.common}</h1>
            <p className="text-xl text-muted-foreground">{country.name.official}</p>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Thủ đô</span>
                <span className="font-bold">{country.capital?.[0] || "N/A"}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Dân số</span>
                <span className="font-bold">{country.population.toLocaleString()} người</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Diện tích</span>
                <span className="font-bold">{country.area.toLocaleString()} km²</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Ngôn ngữ</span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {country.languages ? Object.values(country.languages).map((lang) => (
                    <Badge key={lang} variant="secondary" className="text-[10px]">{lang}</Badge>
                  )) : "N/A"}
                </div>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Tiền tệ</span>
                <span className="font-bold text-right">
                  {country.currencies ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(", ") : "N/A"}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
