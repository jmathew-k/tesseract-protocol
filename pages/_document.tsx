import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
					<Html>
						<Head>
							<meta
								content='Tesseract | Decentralized Infrastructure for Games'
								name='Tesseract XYZ'
							/>
							<meta
								content='Tesseract | Decentralized Infrastructure for Games'
								property='og:title'
							/>
							<meta
								content='Tesseract | Decentralized Infrastructure for Games'
								property='og:description'
							/>
							<meta
								content='%PUBLIC_URL%/fb-og-image.png'
								property='og:image'
							/>
							<meta
								name='viewport'
								content='width=device-width, initial-scale=1'
							/>
							<meta name='theme-color' content='#000000' />
							<meta name='msapplication-TileColor' content='#da532c' />
							<meta name='theme-color' content='#ffffff' />
							<link
								href='https://fonts.googleapis.com/css2?family=Inter:wght@700;900&family=Karla:wght@400;500;800&display=swap'
								rel='stylesheet'
							/>
						</Head>
						<body className='app'>
							<Main />
							<NextScript />
						</body>
					</Html>
				)
    }
}

export default MyDocument;
