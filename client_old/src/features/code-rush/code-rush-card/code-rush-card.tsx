import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TypographyH3 from "@/components/ui/typography/typography-h3";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const CodeRushCard = () => {
  return (
    <Card className="p-5 flex flex-col gap-5">
      <header>
        <TypographyH3>Code Rush</TypographyH3>
      </header>
      <p className="text-muted-foreground">
        Dive into the Code Rush Challenge and solve as many algorithm puzzles as
        you can! Enhance your coding skills, speed up your problem-solving, and
        aim for the top of the leaderboard. Ready to prove your prowess?
      </p>
      <div>
        <Link
          to="/rush"
          className={cn(buttonVariants({ variant: "default" }), "w-24")}
        >
          Play
        </Link>
      </div>
    </Card>
  );
};

export default CodeRushCard;
