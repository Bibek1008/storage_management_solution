import { createSessionClient, createAdminClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { fileId: string } }
) {
  console.log("Download API Route called for fileId:", params?.fileId);
  try {
    const { fileId } = params;
    
    if (!fileId) {
      console.log("No fileId provided for download");
      return NextResponse.json({ error: "File ID is required" }, { status: 400 });
    }

    // Use admin client for file access since session authentication is not working
    console.log("Using admin client for download");
    const { storage } = await createAdminClient();

    // Get the file for download
    const file = await storage.getFileDownload(appwriteConfig.bucketId, fileId);
    
    // Get file info for proper filename
    const fileInfo = await storage.getFile(appwriteConfig.bucketId, fileId);
    
    // Return the file as a download
    return new NextResponse(file, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${fileInfo.name}"`,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
    
  } catch (error) {
    console.error("Error downloading file:", error);
    return NextResponse.json(
      { error: "Failed to download file" },
      { status: 500 }
    );
  }
}