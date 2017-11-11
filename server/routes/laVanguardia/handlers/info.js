const cheerio = require('cheerio');

	function info (req, res){

		req.webParsed(function (err, data) {

			if(err) return res.send(err);

			const $ = cheerio.load(data)

			let newsData =[]
			let title = []
			let href = []
			let imgSrc = []


			$('.story').filter(function(){

				const dataTitle = $(this)				

				const imgFirst = `${dataTitle}`.match(/data-src-md=(["'])(.*?)\1/g)

				title.push(dataTitle.find('h1').text())
				href.push(`${dataTitle}`.match(/[^"]+html/g))
				if(imgFirst !== null){
					const imgUrl = imgFirst.join().match(/[^"]+/g)
					imgSrc.push(imgUrl[1])
				}else {
					imgSrc.push(imgFirst)
				}
						

			})


			const getObjectData = function(dataT, dataHref, dataImg){

				for ( var i = 0; i < dataT.length; i++){
					objx = {}
					objx.title = dataT[i]					
					objx.href = dataHref[i]
					objx.imgSrc = dataImg[i]
					newsData.push(objx)
				}
			}

			getObjectData(title, href, imgSrc)

			res.send({
				newsData
			})

			
		})

	}




	module.exports = info