import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Formulário de Cadastro</FieldLegend>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    E-mail *
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Digite aqui seu e-mail"
                    type="email"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                    Senha *
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-number-uw1"
                    placeholder="Digite aqui sua senha"
                    type="password"
                    required
                  />
                  <FieldDescription>
                    A senha deve conter no mínimo 8 caracteres.
                  </FieldDescription>
                </Field>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="date" className="px-1">
                    Qual sua data de aniversário ?
                  </Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date"
                        className="w-48 justify-between font-normal"
                      >
                        {date ? date.toLocaleDateString() : "Select date"}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                          setDate(date);
                          setOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <FieldSet>
              <FieldLegend>Billing Address</FieldLegend>
              <FieldDescription>
                The billing address associated with your payment method
              </FieldDescription>
              <FieldGroup>
                <Field orientation="horizontal">
                  <Checkbox
                    id="checkout-7j9-same-as-shipping-wgm"
                    defaultChecked
                  />
                  <FieldLabel
                    htmlFor="checkout-7j9-same-as-shipping-wgm"
                    className="font-normal"
                  >
                    Same as shipping address
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-optional-comments">
                    Comments
                  </FieldLabel>
                  <Textarea
                    id="checkout-7j9-optional-comments"
                    placeholder="Add any additional comments"
                    className="resize-none"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <Field orientation="horizontal">
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
