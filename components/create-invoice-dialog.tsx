"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Plus, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { useInvoices } from "@/contexts/invoice-context";

interface CreateInvoiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateInvoiceDialog({
  open,
  onOpenChange,
}: CreateInvoiceDialogProps) {
  const { addInvoice } = useInvoices();
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [dueDate, setDueDate] = useState<Date>();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [items, setItems] = useState([
    { id: "1", description: "", quantity: 1, rate: 0 },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now().toString(), description: "", quantity: 1, rate: 0 },
    ]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id: string, field: string, value: string | number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const total = items.reduce((sum, item) => sum + item.quantity * item.rate, 0);

  const handleSubmit = () => {
    if (
      !clientName ||
      !clientEmail ||
      !dueDate ||
      items.some((item) => !item.description || item.rate <= 0)
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const total = items.reduce(
      (sum, item) => sum + item.quantity * item.rate,
      0
    );

    addInvoice({
      title: items[0]?.description || "New Invoice",
      client: clientName,
      clientEmail,
      amount: total,
      date: format(dueDate, "yyyy-MM-dd"),
      status: "draft",
      items: items.filter((item) => item.description && item.rate > 0),
    });

    onOpenChange(false);
    setClientName("");
    setClientEmail("");
    setDueDate(undefined);
    setItems([{ id: "1", description: "", quantity: 1, rate: 0 }]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-primary">Create New Invoice</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Client Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="clientName">Client Name *</Label>
              <Input
                id="clientName"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Enter client name"
                required
              />
            </div>
            <div>
              <Label htmlFor="clientEmail">Client Email *</Label>
              <Input
                id="clientEmail"
                type="email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder="client@example.com"
                required
              />
            </div>
          </div>

          {/* Due Date */}
          <div>
            <Label htmlFor="dueDate">Due Date *</Label>
            <Input
              id="dueDate"
              type="date"
              value={dueDate ? format(dueDate, 'yyyy-MM-dd') : ''}
              onChange={e => setDueDate(e.target.value ? new Date(e.target.value) : undefined)}
              required
            />
          </div>

          {/* Invoice Items */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <Label>Invoice Items</Label>
              <Button onClick={addItem} size="sm" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            </div>

            <div className="space-y-3">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 gap-2 items-end"
                >
                  <div className="col-span-12 sm:col-span-5">
                    <Input
                      placeholder="Description *"
                      value={item.description}
                      onChange={(e) =>
                        updateItem(item.id, "description", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-span-4 sm:col-span-2">
                    <Input
                      type="number"
                      placeholder="Qty"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "quantity",
                          Number.parseInt(e.target.value) || 0
                        )
                      }
                    />
                  </div>
                  <div className="col-span-4 sm:col-span-3">
                    <Input
                      type="number"
                      placeholder="Rate *"
                      value={item.rate}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "rate",
                          Number.parseFloat(e.target.value) || 0
                        )
                      }
                    />
                  </div>
                  <div className="col-span-3 sm:col-span-1">
                    <p className="text-sm font-medium">
                      ₹{(item.quantity * item.rate).toLocaleString()}
                    </p>
                  </div>
                  <div className="col-span-1 sm:col-span-1">
                    {items.length > 1 && (
                      <Button
                        onClick={() => removeItem(item.id)}
                        size="sm"
                        variant="ghost"
                        className="text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-4 pt-4 border-t">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="text-2xl font-bold text-primary">
                  ₹{total.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={handleSubmit}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              Create Invoice
            </Button>
            <Button
              onClick={() => onOpenChange(false)}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
