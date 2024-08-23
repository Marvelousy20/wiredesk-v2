import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

export const useGetInstagramUrl = () => {
  return useQuery({
    queryKey: ["getInstagramUrl"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/instagram/login/url`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        }
      );
      return data?.data?.url;
    },
  });
};

export const useGetDiscordUrl = () => {
  return useQuery({
    queryKey: ["getDiscordUrl"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/discord/login/url`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        }
      );
      return data?.data?.url;
    },
  });
};

export const useLoginWithWhatsapp = () => {
  return useQuery({
    queryKey: ["loginWithWhatsapp"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/discord/login/url`
      );
      return data?.data.url;
    },
  });
};

// export const getInstagramUrl = async () => {
//   const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/instagram/login/url`;
//   try {
//     const result = await axios.get(apiUrl);
//     return result.data?.data?.url;
//   } catch (error) {
//     console.error("Error fetching Instagram URL:", error);
//     throw error;
//   }
// };

// export const getDiscordUrl = async () => {
//   const getUrlApi = `${process.env.NEXT_PUBLIC_API_URL}/discord/login/url`;
//   const token = process.env.NEXT_PUBLIC_API_TOKEN;
//   try {
//     const result = await axios.get(getUrlApi, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return result.data?.data?.url;
//   } catch (error) {
//     console.error("Error fetching Discord URL:", error);
//     throw error;
//   }
// };

export const loginWithDiscord = async (
  code: string,
  guildId: string,
  permission: string
) => {
  const loginApi = `${process.env.NEXT_PUBLIC_API_URL}/discord/login`;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  const postData = {
    permissions: permission,
    code: code,
    guildId: guildId,
  };

  try {
    const response = await axios.post(loginApi, postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const getWhatsappUrl = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/discord/login/url`;
  try {
    const result = await axios.get(apiUrl);
    return result.data?.data?.url;
  } catch (error) {
    console.error("Error fetching WhatsApp URL:", error);
    throw error;
  }
};

export const installTelegram = async () => {
  console.log("Installing Telegram");
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/telegram/install`;
  const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;

  const postData = {
    botToken: botToken,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };

  try {
    const response = await axios.post(apiUrl, postData, config);
    return response.data;
  } catch (error) {
    console.error("Error installing Telegram:", error);
    throw error;
  }
};

export const installSlack = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/slack/install`;

  const postData = {
    botToken: process.env.NEXT_PUBLIC_SLACK_BOT_TOKEN,
    secret: process.env.NEXT_PUBLIC_SLACK_SECRET,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };

  try {
    const result = await axios.post(apiUrl, postData, config);
    return result.data;
  } catch (error) {
    console.error("Error installing Slack:", error);
    throw error;
  }
};
