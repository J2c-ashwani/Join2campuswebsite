import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Info, Calendar, DollarSign, Clock, Briefcase } from "lucide-react";

interface QuickFactProps {
    label: string;
    value: string;
    icon: React.ComponentType<{ className?: string }>;
}

function FactRow({ label, value, icon: Icon }: QuickFactProps) {
    return (
        <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
            <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">{label}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{value}</p>
            </div>
        </div>
    );
}

interface QuickFactsBoxProps {
    intakes: string;
    tuitionRange: string;
    livingCost: string;
    partTimeWork: string;
    postStudyWork: string;
    visaFactors: string;
    updatedDate: string;
}

export function QuickFactsBox({
    intakes,
    tuitionRange,
    livingCost,
    partTimeWork,
    postStudyWork,
    visaFactors,
    updatedDate,
}: QuickFactsBoxProps) {
    return (
        <Card className="my-8 border-l-4 border-l-primary shadow-sm overflow-hidden">
            <CardHeader className="bg-slate-50 dark:bg-slate-900/50 pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    Quick Facts: At a Glance
                </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2 sm:grid-cols-2 p-6">
                <FactRow label="Major Intakes" value={intakes} icon={Calendar} />
                <FactRow label="Tuition Fees" value={tuitionRange} icon={DollarSign} />
                <FactRow label="Living Cost" value={livingCost} icon={DollarSign} />
                <FactRow label="Part-Time Work" value={partTimeWork} icon={Clock} />
                <FactRow label="Post-Study Work" value={postStudyWork} icon={Briefcase} />
                <FactRow label="Visa Factors" value={visaFactors} icon={Info} />
                <div className="sm:col-span-2 mt-4 pt-4 border-t text-xs text-slate-500 text-right italic">
                    Last Updated: {updatedDate}
                </div>
            </CardContent>
        </Card>
    );
}
