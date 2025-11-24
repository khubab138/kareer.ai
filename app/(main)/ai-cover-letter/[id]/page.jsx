import { getCoverLatter } from "@/actions/cover-latter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import PreviewCoverLetter from "../_components/preview-cover-letter";

const CoverLetter = async ({ params }) => {
  const id = (await params).id;
  const coverLetter = await getCoverLatter(id);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col space-y-2">
        <Link href={"/ai-cover-letter"}>
          <Button variant={"link"} className={"gap-2 pl-0"}>
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>
        <h1 className="text-6xl font-bold gradient-title">
          {coverLetter?.jobTitle} at {coverLetter?.companyName}
        </h1>
      </div>
      <PreviewCoverLetter content={coverLetter?.content} />
    </div>
  );
};

export default CoverLetter;
