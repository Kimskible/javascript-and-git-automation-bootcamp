describe('06', () => {

    // Tip: Use setTimeout to delay the execution of marking

    const listOfPapers = [
        {
            subject: "Maths",
            wasSubmitted: true,
            markPaper: () => {
                const promise =  new Promise ((resolve, reject) =>{
                    setTimeout(() => {
                        resolve("Math paper marked")
                      }, 2000);
                })
            }
        },
        {
            subject: "Geology",
            wasSubmitted: true,
            markPaper: () => {
                const promise =  new Promise ((resolve, reject) =>{
                    setTimeout(() => {
                        resolve("Geology paper marked")
                      }, 2000);
                })
            }
        },

        {
            subject: "Social Studies",
            wasSubmitted: false,
            markPaper: () => {
                const promise =  new Promise ((resolve, reject) =>{
                    setTimeout(() => {
                        resolve("SOcial Studies paper marked")
                      }, 2000);
                })
            }
        },
    ]

    it('Check if a paper was submitted, and if yes, wait for it to be marked', async () => {
        const spyOnLog = vi.spyOn(console, 'log');

        // Your code here
        for await (const paper of listOfPapers){
            if (paper.wasSubmitted === true){
             return paper.markPaper()
            }
        }

        expect(spyOnLog).toHaveBeenCalledWith("Maths paper marked");
        expect(spyOnLog).toHaveBeenCalledWith("Geology paper marked");
        expect(spyOnLog).not.toHaveBeenCalledWith("Social Studies paper marked");
        expect(listOfPapers[0].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[1].markPaper()).toBeInstanceOf(Promise);
        expect(listOfPapers[2].markPaper()).toBeInstanceOf(Promise);
    });
});