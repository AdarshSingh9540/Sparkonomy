"use client";

import { useState } from "react";
import { Plus, Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreateInvoiceDialog } from "./create-invoice-dialog";

export function CreateInvoiceCard() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
            <Plus className="w-6 h-6 text-primary" />
          </div>

          <h2 className="text-lg font-semibold text-primary mb-2 cursor-pointer">
            Create New Invoice
          </h2>

          <p className="text-sm text-muted-foreground mb-4">
            Start by creating and sending new invoice
          </p>

          <div className="space-y-3">
            <Button onClick={() => setShowDialog(true)} className="w-full cursor-pointer">
              <Plus className="w-4 h-4 mr-2" />
              Create Invoice
            </Button>

            <Button
              variant="outline"
              className="w-full text-primary border-primary/30 bg-transparent"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Existing
            </Button>
          </div>
        </CardContent>
      </Card>

      <CreateInvoiceDialog open={showDialog} onOpenChange={setShowDialog} />
    </>
  );
}
