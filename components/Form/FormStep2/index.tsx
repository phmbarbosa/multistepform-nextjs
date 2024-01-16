import { Input, Textarea} from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { FieldValues, UseFormRegister } from "react-hook-form";
import {Divider} from "@nextui-org/divider";

type FormStep2Props = {
    registerFunction: UseFormRegister<FieldValues>
}

export function FormStep2({ registerFunction }: FormStep2Props) {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-6">
                <Select isRequired label="Possui experiencia no setor?: " {...registerFunction("educInfo.experience")}>
                    <SelectItem key="Sim">Sim</SelectItem>
                    <SelectItem key="Nao">Não</SelectItem>
                </Select>
                <Input isRequired type="number" label="Quantos meses de experiência: "
                {...registerFunction("educInfo.timeExperience")}/>
            </div>
            <div className="flex gap-6">
                <Select isRequired label="Nível de escolaridade: " {...registerFunction("educInfo.qualification")}>
                    <SelectItem key="Fundamental">Fundamental</SelectItem>
                    <SelectItem key="Medio">Médio</SelectItem>
                    <SelectItem key="Superior">Superior</SelectItem>
                    <SelectItem key="Tecnico">Técnico</SelectItem>
                </Select>
                <Select isRequired label="Situação atual: " {...registerFunction("educInfo.situation")}>
                    <SelectItem key="Cursando">Cursando</SelectItem>
                    <SelectItem key="Incompleto">Incompleto</SelectItem>
                    <SelectItem key="Completo">Completo</SelectItem>
                </Select>
            </div>
            <div className="flex gap-6">
                <Input isRequired type="text" label="Curso: " {...registerFunction("educInfo.course")}/>
                <Input isRequired type="number" label="Periodo: " {...registerFunction("educInfo.period")}/>
            </div>
            <div className="flex gap-6">
                <Input isRequired type="date" placeholder="00/00/0000" label="Inicio do curso: "
                {...registerFunction("educInfo.start")}/>
                <Input isRequired type="date" placeholder="00/00/0000" label="Fim do curso: "
                {...registerFunction("educInfo.end")}/>
            </div>
            <Divider className="my-4"/>
            <div className="flex gap-6">
                <Textarea label="Deseja comentar ou perguntar algo?" {...registerFunction("educInfo.quest")}/>
            </div>
        </div>
    )
}