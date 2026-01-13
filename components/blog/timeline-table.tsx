import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CheckCircle2 } from "lucide-react";

interface TimelineEvent {
    month: string;
    activity: string;
    status?: "done" | "upcoming" | "active";
}

interface TimelineTableProps {
    timeline: TimelineEvent[];
}

export function TimelineTable({ timeline }: TimelineTableProps) {
    return (
        <div className="my-10 border rounded-xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 border-b">
                <h3 className="font-bold text-lg flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Application Timeline (Step-by-Step)
                </h3>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px] font-bold">Timeframe</TableHead>
                        <TableHead className="font-bold">Action Required</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {timeline.map((event, index) => (
                        <TableRow key={index} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors">
                            <TableCell className="font-medium text-primary">
                                {event.month}
                            </TableCell>
                            <TableCell>{event.activity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
