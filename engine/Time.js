class Time {
    static deltaTime = 1/60

    static time = 0

    static update(){
        Time.time += Time.deltaTime
    }

    static getRefreshRate = () =>
        new Promise(resolve =>
            requestAnimationFrame(t1 =>
                requestAnimationFrame(t2 => resolve(1000 / (t2 - t1)))
            )
        );
}