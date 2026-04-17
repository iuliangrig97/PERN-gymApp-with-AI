import { Router, type Request, type Response } from "express";
import { prisma } from "../lib/prisma";

export const profileRouter = Router();

profileRouter.post('/', async (req: Request, res: Response) => {
    try {
        const { userId, ...profileData } = req.body

        if (!userId) {
            return res.status(400).json({ error: "User ID is required" })
        }

        const {
            goal,
            experience,
            days,
            time,
            equipment,
            body,
            injuries,
        } = profileData

        if (!goal ||
            !experience ||
            !days ||
            !time ||
            !equipment ||
            !body) {
            return res.status(400).json({ error: "Missing required fields" })
        }

        await prisma.user_Profiles.upsert({
            where: { user_id: userId },
            update: {
                goal,
                experience,
                days_per_week: days,
                session_length: time,
                equipment,
                body,
                injuries: injuries || null,
                updated_at: new Date(),
            },
            create: {
                user_id: userId,
                goal,
                experience,
                days_per_week: days,
                session_length: time,
                equipment,
                body,
                injuries: injuries || null,
            }
        });

        res.json({ success: true })

    } catch (err) {
        console.error('Error profile: ', err)
        res.status(500).json({ error: "Failed to save profile" })
    }
})