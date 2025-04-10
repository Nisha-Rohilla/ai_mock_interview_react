import { Button } from "@/components/ui/button"
import { Headings } from "@/components/ui/headings"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"
import { Link } from "react-router-dom"
const Dashboard = () => {
    return (<>
        <div className="flex w-full items-center justify-between">
            {/* headings */}
            <Headings title="Dashboard"
                description="Create and start you AI mock interview" />
            {/* content section */}

            <Link to={"/generate/create"}>
                <Button size={"sm"}>
                    <Plus /> Add New
                </Button>
            </Link>

            <Separator className="my-8" />

        </div>
    </>
    )
}

export default Dashboard
