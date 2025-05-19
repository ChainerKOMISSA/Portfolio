import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "likes.json");

export async function GET() {
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    return new Response(JSON.stringify(data["blogArticle1"]), {
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(req: Request) {
    const body = await req.json();
    const { type } = body; // 'like' ou 'dislike'

    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);

    if (!data["blogArticle1"]) {
        data["blogArticle1"] = { likes: 0, dislikes: 0 };
    }

    if (type === "like") {
        data["blogArticle1"].likes++;
    } else if (type === "dislike") {
        data["blogArticle1"].dislikes++;
    }

    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return new Response(JSON.stringify(data["blogArticle1"]), {
        headers: { "Content-Type": "application/json" },
    });
}
