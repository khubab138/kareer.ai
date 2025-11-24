"use client";
import { deleteCoverLatter } from "@/actions/cover-latter";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns/format";
import { AlertTriangle, Eye, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const CoverLetterList = ({ coverLetters }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await deleteCoverLatter(id);
      toast.success("Cover Letter Deleted Successfully");
      router.refresh();
    } catch (error) {
      toast.error(error.message || "Failed to delete cover letter");
    }
  };

  if (!coverLetters.length) {
    return (
      <div className="flex p-3 gap-2 items-center border-2 border-y-amber-600 text-yellow-600 rounded mb-2">
        <AlertTriangle className="h-5 w-5 " />
        <span className="text-md">
          Create your first cover letter to get started
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {coverLetters?.map((letter) => (
        <Card key={letter.id} className={"group relative"}>
          <CardHeader>
            <div className="flex items-start justify-center">
              <div>
                <CardTitle className={"text-xl gradient-title"}>
                  {letter.jobTitle} at {letter.companyName}
                </CardTitle>
                <CardDescription>
                  Created {format(new Date(letter.createdAt), "PPP")}
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <AlertDialog>
                  <Button
                    variant={"outline"}
                    size="icon"
                    onClick={() => router.push(`/ai-cover-letter/${letter.id}`)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <AlertDialogTrigger asChild>
                    <Button variant={"outline"} size={"icon"}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Cover Letter?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will Permenently
                        delete your cover letter for {letter.jobTitle} at {""}
                        {letter.companyName}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(letter.id)}
                        className={
                          "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        }
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground text-sm line-clamp-3">
              {letter.jobDescription}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CoverLetterList;
