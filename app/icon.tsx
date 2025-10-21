import { ImageResponse } from 'next/og'
 
export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#53a318',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 900,
          borderRadius: '6px',
        }}
      >
        G
      </div>
    ),
    {
      ...size,
    }
  )
}

