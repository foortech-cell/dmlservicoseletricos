import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0D0C09",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "linear-gradient(160deg, rgba(241,186,24,0.5) 0%, rgba(204,123,22,0.5) 100%)",
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(160deg, #F1BA18 0%, #CC7B16 100%)",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 800, color: "#F1BA18", display: "flex" }}>
            DML SERVIÇOS ELÉTRICOS
          </div>
        </div>
        <div
          style={{
            fontSize: 66,
            fontWeight: 800,
            color: "#FFFFFF",
            maxWidth: 950,
            lineHeight: 1.08,
            display: "flex",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div style={{ fontSize: 28, color: "#A5A093", marginTop: 28, display: "flex" }}>
          {siteConfig.serviceArea} · Plantão 24 horas
        </div>
      </div>
    ),
    { ...size },
  );
}
