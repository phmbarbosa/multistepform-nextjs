import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { FieldValues, UseFormRegister } from "react-hook-form";

type FormStep1Props = {
    registerFunction: UseFormRegister<FieldValues>
}

export function FormStep1({ registerFunction }: FormStep1Props) {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-6">
                <Input isRequired type="text" label="Nome completo: " {...registerFunction("personalInfo.fullName")}/>
                <Input isRequired type="date" label="Data de nascimento: " placeholder="00/00/0000" 
                {...registerFunction("personalInfo.birthDate")}/>
            </div>
            <div className="flex gap-6">
                <Select isRequired label="Estado Civil: " {...registerFunction("personalInfo.maritage")}>
                    <SelectItem key="Solteiro">Solteiro(a)</SelectItem>
                    <SelectItem key="Casado">Casado(a)</SelectItem>
                    <SelectItem key="Viuvo">Viuvo(a)</SelectItem>
                    <SelectItem key="Divorciado">Divorciado(a)</SelectItem>
                </Select>
                <Input isRequired type="number" label="CEP: " {...registerFunction("personalInfo.cep")}/>
            </div>
            <div className="flex gap-6">
                <Input isRequired type="text" label="Logradouro: " {...registerFunction("personalInfo.street")}/>
                <Input isRequired type="number" label="Número: " {...registerFunction("personalInfo.number")}/>
            </div>
            <div className="flex gap-6">
                <Input type="text" label="Complemento: " {...registerFunction("personalInfo.complement")}/>
                <Input isRequired type="text" label="Bairro: " {...registerFunction("personalInfo.district")}/>
            </div>
            <div className="flex gap-6">
                <Input isRequired type="text" label="Cidade: " {...registerFunction("personalInfo.city")}/>
                <Input isRequired type="text" label="Estado: " {...registerFunction("personalInfo.state")}/>
            </div>
        </div>
    )
}