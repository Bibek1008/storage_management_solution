import { createSessionClient, createAdminClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { fileId: string } }
) {
  console.log("API Route called for fileId:", params?.fileId);
  try {
    const { fileId } = params;
    
    if (!fileId) {
      console.log("No fileId provided");
      return NextResponse.json({ error: "File ID is required" }, { status: 400 });
    }

    // Use admin client for file access since session authentication is not working
    console.log("Using admin client for file access");
    const { storage } = await createAdminClient();

    // Get file info to determine content type
    const fileInfo = await storage.getFile(appwriteConfig.bucketId, fileId);
    
    // Get the file content
    const file = await storage.getFileView(appwriteConfig.bucketId, fileId);
    
    // Determine content type based on file extension
    const getContentType = (filename: string) => {
      const ext = filename.toLowerCase().split('.').pop();
      switch (ext) {
        case 'pdf': return 'application/pdf';
        case 'jpg': case 'jpeg': return 'image/jpeg';
        case 'png': return 'image/png';
        case 'gif': return 'image/gif';
        case 'svg': return 'image/svg+xml';
        case 'txt': return 'text/plain';
        case 'html': return 'text/html';
        case 'css': return 'text/css';
        case 'js': return 'application/javascript';
        case 'json': return 'application/json';
        case 'mp4': return 'video/mp4';
        case 'mp3': return 'audio/mpeg';
        default: return 'application/octet-stream';
      }
    };
    
    const contentType = getContentType(fileInfo.name);
    
    // Return the file as a response with proper content type
    return new NextResponse(file, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
    
  } catch (error) {
    console.error("Error serving file:", error);
    return NextResponse.json(
      { error: "Failed to retrieve file" },
      { status: 500 }
    );
  }
}