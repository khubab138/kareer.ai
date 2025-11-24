import { getCoverLatters } from "@/actions/cover-latter";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import CoverLetterList from "./_components/cover-letter-list";

const AiCoverLetterPage = async () => {
  const coverLetters = await getCoverLatters();

  return (
    <div className="px-2 md:px-0">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-center mb-5">
        <h1 className="text-5xl md:text-6xl font-bold gradient-title">
          Cover Letters
        </h1>
        <Link href={"/ai-cover-letter/new"}>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>

      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
};

export default AiCoverLetterPage;
