"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type NotificationCard = {
  id: string;
  name: string;
  time: string;
  amount: string;
  avatar: string;
  fallback: string;
};

const NotificationStack = ({ notifications: initialNotifications }: { notifications: NotificationCard[] }) => {
  const [notifications, setNotifications] = useState<NotificationCard[]>(initialNotifications);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-24">
      {notifications.map((notification, index) => (
        <motion.div
          key={notification.id}
          className="bg-background absolute left-1/2 flex w-full -translate-x-1/2 items-center justify-between rounded-md px-6 py-2.5 shadow-sm border"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: (index - 2) * -8,
            scale: 1 - index * 0.05,
            opacity: 1 - index * 0.25,
            zIndex: notifications.length - index,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={notification.avatar} alt={notification.name} />
              <AvatarFallback>{notification.fallback}</AvatarFallback>
            </Avatar>

            <div className="space-y-1 text-left">
              <p className="text-sm font-semibold">{notification.name}</p>
              <p className="text-xs text-muted-foreground">{notification.time}</p>
            </div>
          </div>

          <span className="text-sm font-semibold text-primary">{notification.amount}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default NotificationStack;
