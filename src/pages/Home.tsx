import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import * as React from "react";
import { Header } from "@/components/Header";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Definindo o Schema com zod
const formSchema = z.object({
  name: z.string().min(3, { message: "Esse nome é curto demais." }),
  email: z.email({ message: "Por favor, insira um e-mail válido." }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Home() {
  const deleteForm = () => {
    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Dados validados:", data);
    alert("Formulário enviado com sucesso! Veja o console.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-gray-300">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Formulário de Cadastro</FieldLegend>
                <FieldGroup className="mt-4">
                  <Field>
                    <FieldLabel htmlFor="name" className="px-1">
                      Nome *
                    </FieldLabel>
                    <Input
                      id="name"
                      placeholder="Digite aqui seu nome"
                      type="name"
                      {...register("name")}
                    />
                    {/* Exibindo o erro */}
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      E-mail *
                    </FieldLabel>
                    <Input
                      id="email"
                      placeholder="Digite aqui seu e-mail"
                      type="email"
                      {...register("email")}
                    />
                    {/* Exibindo o erro */}
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                      Senha *
                    </FieldLabel>
                    <Input
                      id="password"
                      placeholder="Digite aqui sua senha"
                      type="password"
                      {...register("password")}
                    />
                    {/* Exibindo o erro */}
                    {errors.password && (
                      <p className="text-sm text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                    <FieldDescription>
                      A senha deve conter no mínimo 8 caracteres.
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </FieldSet>
              {/* <FieldSeparator /> */}
              <Field orientation="horizontal" className="mt-4">
                <Button type="submit">Enviar</Button>
                <Button variant="outline" type="button" onClick={deleteForm}>
                  Cancelar
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
    </div>
  );
}
