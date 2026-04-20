import { Country } from "@/types/country";
import { Badge } from "@/components/ui/badge";
import CountryList from "@/components/country-list";

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
          <p className="text-muted-foreground">Tìm kiếm và khám phá thông tin về các quốc gia trên toàn cầu.</p>
        </div>
        <Badge variant="outline" className="w-fit h-fit px-4 py-1 text-sm bg-background/50 backdrop-blur-sm">
          {countries.length} Quốc gia & Vùng lãnh thổ
        </Badge>
      </div>

      {/* Tích hợp component tìm kiếm và danh sách */}
      <CountryList initialCountries={countries} />
    </div>
  );
}
