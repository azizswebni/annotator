import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import adultes_nbr from "@/data/adultes";
import ville_titles from "@/data/ville_titles";
import { Button } from "../ui/button";
import { enfants_nbr, etoiles_nbr, nuits_nbr } from "@/data/data";

const options = [
  {
    name: "Ville :",
    options: ville_titles,
  },
  {
    name: "Nombre de chambre :",
    options: adultes_nbr,
  },
  {
    name: "Etoiles :",
    options: etoiles_nbr,
  },
  {
    name: "Adultes :",
    options: adultes_nbr,
  },
  {
    name: "Nuits :",
    options: nuits_nbr,
  },
  {
    name: "Nombre d'Enfants :",
    options: enfants_nbr,
  },
];

function Recommendation() {
  return (
    <div className="bg-hero bg-cover bg-no-repeat h-svh flex flex-col justify-center items-center">
      <div className="flex flex-col w-5/6 items-center justify-center gap-5">
        <div className="rounded-xl bg-white bg-opacity-98 p-10 w-5/6 flex flex-row justify-start items-center flex-wrap gap-20">
          <div className="w-5/6 text-black mb-5">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Réservez votre hôtel
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Découvrez une nouvelle façon de trouver votre hébergement idéal
              avec notre plateforme de recommandation d'hôtels. Parcourez notre
              sélection minutieusement choisie, basée sur vos préférences
              personnelles, et préparez-vous à vivre des séjours inoubliables,
              où chaque nuit est aussi confortable qu'exceptionnelle.
            </p>
          </div>
          {options.map((opt, idx) => {
            return (
              <div className="w-1/4">
                <Select key={idx}>
                  {opt.name}
                  <SelectTrigger>
                    <SelectValue placeholder={opt.name} />
                  </SelectTrigger>
                  <SelectContent>
                    {opt.options.map((o, idx) => (
                      <SelectItem key={idx} value={`${o.id}`}>
                        {o.value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            );
          })}
        </div>
        <Button size={"lg"} variant={"outline"}>
          {" "}
          Rechercher
        </Button>
      </div>
    </div>
  );
}

export default Recommendation;
