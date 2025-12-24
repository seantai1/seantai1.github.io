const Music = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">music</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          some favorites and recently played
        </p>
      </div>

      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          a snippet of my music taste!
        </p>

        <div className="space-y-8">
          {/* top row: current rotation (left) and all-time favorites (right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">current rotation</h3>
              <div className="space-y-2">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/2Ud3deeqLAG988pfW0Kwcl?utm_source=generator"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/1TnUURhehaoMWKAqQtirm6?utm_source=generator"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/0UOG0zUn7t8m8QcxfzR7AH?utm_source=generator" 
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">all-time favorites</h3>
              <div className="space-y-2">
              <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/1fDFHXcykq4iw8Gg7s5hG9?utm_source=generator"
                  // src="https://open.spotify.com/embed/track/2JFeVDbE3HZhY2E3oNReKh?utm_source=generator"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/1scaOnahzG7o8pfwfsL784?utm_source=generator"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/6fKIyDJHZ9m84jRhSmpuwS?utm_source=generator&theme=0a"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* full-width: recent concerts */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">recent concerts</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-card rounded border border-border">
                <div>
                  <div className="font-medium text-foreground">knock2</div>
                  <div className="text-sm text-muted-foreground">the midway</div>
                </div>
                <div className="text-sm text-muted-foreground">nov 2025</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-card rounded border border-border">
                <div>
                  <div className="font-medium text-foreground">lorde</div>
                  <div className="text-sm text-muted-foreground">greek theatre</div>
                </div>
                <div className="text-sm text-muted-foreground">oct 2025</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-card rounded border border-border">
                <div>
                  <div className="font-medium text-foreground">ethel cain</div>
                  <div className="text-sm text-muted-foreground">greek theatre</div>
                </div>
                <div className="text-sm text-muted-foreground">aug 2025</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-card rounded border border-border">
                <div>
                  <div className="font-medium text-foreground">zedd</div>
                  <div className="text-sm text-muted-foreground">bill graham</div>
                </div>
                <div className="text-sm text-muted-foreground">oct 2024</div>
              </div>
            </div>
          </div>
        </div>


        <div className="pt-6">
          <p className="text-muted-foreground leading-relaxed">
            always open to music recommendations! feel free to send me your favorite
            tracks or albums.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Music;
