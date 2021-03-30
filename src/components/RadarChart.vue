<script>
    import { Radar } from 'vue-chartjs'

    export default {
        extends: Radar,
        data () {
            return {
                chartData: {
                    labels: [
                        "Внимательность",
                        "Счастье",
                        "Самообладание",
                        "Уверенность",
                        "Настойчивность",
                        "Ответсвенность",
                        "Объективность",
                        "Чуткость",
                        "Активность",
                        "Общительность"
                    ],
                    datasets: [
                        {
                            label: 'Radar Chart',
                            borderWidth: 1,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',

                            data: [
                                100,
                                68,
                                32,
                                -32,
                                -68,
                                -100,
                            ]
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        mounted () {
            this.renderChart(this.chartData, this.options)
        }
    }
</script>
